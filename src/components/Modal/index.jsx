import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
    
    return ReactDOM.createPortal(
        <div className='modal-background'>
            <section className='modal-element'>
                {children}
            </section>
        </div>
        ,
        document.getElementById('modal')
    )
}

export{Modal}