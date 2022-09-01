import './Info.css'

export const Info = ({ titleSize, bodySize, title, body, width, children }) => {
    return (
        <div className='info-cotainer' style={{ width: width || '100%' }}>
            <div className='info-title-container'>
                {children}
                <h1 className='info-title' style={{ fontSize: titleSize }}>
                    {title}
                </h1>
            </div>

            <p className='info-body' style={{ fontSize: bodySize }}>
                {body}
            </p>

        </div>
    )
}
