import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import ReactDom from 'react-dom'

const CloseSvg = <i className="fa fa-times" aria-hidden="true"></i>

const TurnLeft = <i className="fa fa-undo" aria-hidden="true"></i>

const TurnRight = <i className="fa fa-repeat" aria-hidden="true"></i>

const ScaleLarge = <i className="fa fa-search-plus" aria-hidden="true"></i>

const ScaleSmall = <i className="fa fa-search-minus" aria-hidden="true"></i>

const DownloadSvg = <i className="fa fa-arrow-down" aria-hidden="true"></i> 

const ImgPre = <i className="fa fa-arrow-left" aria-hidden="true"></i> 

const ImgNext = <i className="fa fa-arrow-right" aria-hidden="true"></i>

const Reset = <i className="fa fa-refresh" aria-hidden="true"></i>

let modalNode = document.getElementById('ipreview-model-box') || document.body.appendChild(document.createElement('div'))
!modalNode.id && (modalNode.id = 'ipreview-model-box')

const ModalView = (props) => {
    const { concise, download, url, iconSet, zIndex, preview, rotate, scale, activeIndex, transX, transY } = props.data
    const { large, small, turnLeft, turnRight, changePreview, addActiveIndex, minusActiveIndex, reset, beginMove, moving, moveOver } = props
    const argType = typeof(url)
    const maxIndex = argType !== 'string' ? url.length - 1 : null
    return preview && 
        <div className="preview-wrapper" onClick={(event) => {event.stopPropagation()}} onScroll={(event) => {console.log('scrolling')}} style={{zIndex: preview ? zIndex : undefined}}>
            <img className="preview-img" onMouseLeave={(event) => moveOver(event)} onMouseDown={(event) => {beginMove(event)}} onMouseMove={(event) => {moving(event)}} onMouseUp={(event) => {moveOver(event)}} src={maxIndex || maxIndex === 0 ? url[activeIndex] : url} style={{transform: `rotate(${rotate}deg) scale(${scale}) translateX(${transX}px) translateY(${transY}px)`}} />
            <div className="preview-close preview-tool"onClick={() => changePreview()}>
                {iconSet.close}
            </div>
            {!concise && (maxIndex || maxIndex === 0) && <div className="preview-count-box">
                {`${activeIndex + 1} / ${maxIndex || maxIndex === 0 ? url.length : ''}`}
            </div>}
            {!concise && (maxIndex || maxIndex === 0) && <div className={`preview-tool img-pre${activeIndex <= 0 ? ' disabled' : ''}`} onClick={() => minusActiveIndex()}>
                {iconSet.pre}
            </div>}
            {!concise && (maxIndex || maxIndex === 0) && <div className={`preview-tool img-next${activeIndex >= maxIndex ? ' disabled' : ''}`} onClick={() => addActiveIndex()}>
                {iconSet.next}
            </div>}
            {!concise && <div className="preview-tool-bar">
                <div className="preview-tool" onClick={() => turnLeft()}>
                    {iconSet.rotateLeft}
                </div>
                <div className="preview-tool" onClick={() => turnRight()}>
                    {iconSet.rotateRight}
                </div>
                <div className={`preview-tool${scale >= 2.9 ? ' disabled' : ''}`} onClick={() => large()}>
                    {iconSet.large}
                </div>
                <div className={`preview-tool${scale <= 0.2 ? ' disabled' : ''}`} onClick={() => small()}>
                    {iconSet.small}
                </div>
                {download && <div className="preview-tool">
                    <a href={maxIndex || maxIndex === 0 ? url[activeIndex] : url} download>{iconSet.download}</a>
                </div>}
                <div className="preview-tool" onClick={() => reset()}>
                    {iconSet.reset}
                </div>
            </div>}
        </div>
}

const ImgPreview = (props) => {
    const [preview, setPreview] = useState(false)
    const [rotate, setRotate] = useState(0)
    const [scale, setScale] = useState(1)
    const [activeIndex, setActiveIndex] = useState(0)
    const [transX, setTransX] = useState(0)
    const [transY, setTransY] = useState(0)
    const [isMove, setIsMove] = useState(false)

    let reset = () => {
        setScale(1)
        setRotate(0)
        setTransY(0)
        setTransX(0)
    }

    let changeScale = (newScale) => {
        if (newScale > 3 || newScale < 0.1) return false
        setScale(newScale)
    }

    let changeActiveIndex = (newIndex) => {
        if (newIndex >= props.url.length || newIndex < 0) return false
        setActiveIndex(newIndex)
        reset()
    }

    let showPreview = (e) => {
        setPreview(!preview)
        !props.canClick && e.stopPropagation()
    }

    let beginMove = (e) => {
        e.preventDefault()
        setIsMove(true)
    }

    let moving = (e) => {
        e.preventDefault()
        if (!isMove || props.concise) return false
        setTransX(transX + e.movementX)
        setTransY(transY + e.movementY)
    }

    let moveOver = (e) => {
        e.preventDefault()
        setIsMove(false)
    }

    useEffect(() => {
        if (preview) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        ReactDom.render(
        <ModalView
            data={{preview, rotate, scale, transX, transY, activeIndex, ...props}}
            changePreview={() => setPreview(!preview)}
            small={() => changeScale(scale - 0.1)}
            large={() => changeScale(scale + 0.1)}
            minusActiveIndex={() => changeActiveIndex(activeIndex - 1)}
            addActiveIndex={() => changeActiveIndex(activeIndex + 1)}
            turnLeft={() => setRotate(rotate - 90)}
            turnRight={() => setRotate(rotate + 90)}
            reset={() => reset()}
            beginMove={(event) => {beginMove(event)}}
            moving={(event) => {moving(event)}}
            moveOver={(event) => {moveOver(event)}}
        />,
        modalNode
        )
    })

    return <div style={{display: 'inline-block', verticalAlign: 'top'}} onClick={(event) => {showPreview(event)}}>
                {props.children}
            </div>

}

ImgPreview.propTypes = {
    concise: PropTypes.bool,
    download: PropTypes.bool,
    url: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    iconSet: PropTypes.object,
    zIndex: PropTypes.number,
    canClick: PropTypes.bool
}

ImgPreview.defaultProps = {
    concise: false,
    download: false,
    iconSet: {
        close: CloseSvg,
        pre: ImgPre,
        next: ImgNext,
        rotateLeft: TurnLeft,
        rotateRight: TurnRight,
        large: ScaleLarge,
        small: ScaleSmall,
        download: DownloadSvg,
        reset: Reset
    },
    zIndex: 999,
    canClick: false
}


export default ImgPreview