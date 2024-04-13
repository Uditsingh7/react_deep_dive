import { useNavigate } from 'react-router-dom';

const AppBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{
                color: "blue", height: "60px", display: "flex",
                width: "100vw",
                backgroundColor: "lightGray", alignContent: "flex-start", justifyContent: "center",
                padding: "10px",
                position: "fixed",
                top: 0, left: 0,
            }}>This is a header bar
                <button
                    onClick={() => {
                        navigate('/')
                    }}
                    style={{ marginLeft: "10px", marginRight: "5px" }}>Dashboard</button>
                <button
                    onClick={() => {
                        navigate('/contact')
                    }}
                    style={{ padding: "15px" }}>Contact Us</button>
            </div>


        </>
    )

}

export default AppBar;