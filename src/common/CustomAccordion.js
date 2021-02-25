import React from 'react';
import { Accordion, Card } from 'react-bootstrap';


const CustomAccordion = (props) => {
    return (
        <Accordion defaultActiveKey={props?.activeKey}>
            <Card>
                <Accordion.Toggle
                    className={props?.className}
                    as={Card.Header} 
                    eventKey="0"
                >
                    <span className='mr-2'>{props?.serialNo}</span>
                    {props?.header}
                    <div className='ml-3'>
                        <small>{props?.selected && props.selected}</small>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse 
                    eventKey="0"
                >
                    <Card.Body>
                        {props?.body}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default CustomAccordion;