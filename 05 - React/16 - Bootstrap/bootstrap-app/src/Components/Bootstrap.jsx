import { Button, Form }from 'react-bootstrap';

export default function Bootstrap() {
    return (
        <div>
           <Form>
                <Form.Group>
                    <Form.Label>Email Adresa</Form.Label>
                    <Form.Control type='email' placeholder='Unesite email adresu' name='email'/>
                    <Form.Text className='text-muted'>Vaša privatnost je zajamčena.</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Lozinka</Form.Label>
                    <Form.Control type='password' placeholder='Lozinka' name='pasword'/>
                </Form.Group>

                <Button variant='success'> Prijavi se</Button>
            </Form> 
        </div>
    );
}