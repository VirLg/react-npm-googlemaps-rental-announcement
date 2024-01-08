import styled from '@emotion/styled';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalWindovDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  min-height: 400px;
  width: 100%;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 1);
  padding: 40px;
`;

export const RentalCar = styled.button`
  width: 168px;
  height: 44px;
  top: 20px;
  left: 20px;
  border-radius: 12px;
  padding: 12px, 50px, 12px, 50px;
  margin-top: 24px;
`;
export const ModalWindowImg = styled.img`
  width: 461px;
  height: 248px;
  top: 20px;
  left: 20px;
  border-radius: 14px;
  margin-right: auto;
  margin-left: auto;
`;
export const H1 = styled.h1`
  font: Manrope;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 14px;
`;
export const H2 = styled.h1`
  font: Manrope;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(18, 20, 23, 1);
  margin-top: 14px;
`;
export const H3 = styled.h1`
  font: Manrope;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: rgba(18, 20, 23, 1);
  margin-top: 24px;
`;
export const Span = styled.h1`
  font: Manrope;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter: -2%;
  color: rgba(18, 20, 23, 1);
  margin-top: 8px;
`;
