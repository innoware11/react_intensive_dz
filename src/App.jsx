import React, { useState, useRef } from 'react';
import { Alert, Button } from 'react-bootstrap';
import useClickOutside from './Hooks/useClickOutside';
import useFetch from './Hooks/useFetch';

function App() {
    const [show, setShow] = useState(true);
    const productsRequest = useFetch('http://faceprog.ru/reactcourseapi/products/all.php')
    const alertRef = useRef(null);
    const btnAlertRef = useRef(null);

    useClickOutside([alertRef, btnAlertRef], setShow);

    return (
        <div>
            { productsRequest.done && productsRequest.data &&
                <pre>
                    {productsRequest.data}
                </pre>
            }
            <hr/>
            {show ? (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible ref={alertRef}>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Change this and that and try again.
                    </p>
                </Alert>
            ) : (
                <Button 
                    onClick={(e) => {
                        e.stopPropagation(); // Предотвращение распространения события
                        setShow(true);
                    }} 
                    ref={btnAlertRef}
                >
                    Show Alert
                </Button>
            )}
        </div>
    );
}

export default App;