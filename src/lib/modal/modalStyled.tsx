import styled from "styled-components";

const St = {
  Backdrop: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.35);
  `,

  Container: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    border-radius: 8px 8px 0px 0px;
    background: white;
  `,
};

export default St;
