import Container from '@mui/material/Container';

const ContainerComponent = ({ children }) => {
    return (
        <Container 
            maxWidth="xxl"
            sx={{
                minHeight: '90vh',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '20px', 
                backgroundColor: '#FFF8E1',
              }}
            >
            {children}
        </Container>
    );
};

export default ContainerComponent;