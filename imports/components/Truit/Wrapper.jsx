import styled from 'styled-components';

const Wrapper = styled.div`
    padding 0.5rem;
    border-bottom : 1px solid black;

    &:last-child {
        border-bottom : none;
    }
    &:hover {
        background-color : #ccc;
    }
`;

export default Wrapper;
