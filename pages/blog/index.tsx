import Header from 'app-common/components/Header/Header';
import styled from 'styled-components';
import Footer from 'app-common/components/Footer';

const Body = styled.div`
  display: flex;
  justify-content: center;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-top: 50px;
`;

const BlogApp = () => {
  return (
    <>
      <Header />
      <Body>
        <Title>Blog App</Title>
      </Body>
      <Footer />
    </>
  );
};

export default BlogApp;
