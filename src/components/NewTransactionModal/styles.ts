import styled from 'styled-components'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {

        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;


   
        background: #E7E9EE;

        border: 1px solid #D7D7D7;
        box-sizing: border-box;
        border-radius: 0.25px;


        font-size: 1rem;
        font-weight: 600;

        &::placeholder {
          color: var(--text-body)  
        }


        & + input {
            margin-top: 1rem;
        }

    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;