import Container from '@mui/material/Container';

const ContainerComponent = ({ children }) => {
    return (
        <Container 
            maxWidth="xxl"
            sx={{
                minHeight: '80vh',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '20px', 
              }}
            >
            {children}
        </Container>
    );
};

export default ContainerComponent;