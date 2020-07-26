import styled from "styled-components";

const AnimalCard = ({ data }) => {
  const { name, age, gender, imageUrl } = data;

  return (
    <StyledAnimalCard>
      <div className="photo-wrapper">
        <img className="photo" src="/static/images/cats/cat-01.jpg" alt="" />
      </div>

      <div className="detail-block">
        <p className="name">Stevey</p>

        <p className="age">~5 years old</p>

        <div className="gender_indicator">
          <svg
            className="gender_svg"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24.0499 0.994385H19.1124C18.4437 0.994385 18.1124 1.80063 18.5812 2.27563L19.6374 3.33188L14.5937 8.37564C13.2062 7.50064 11.5624 6.99438 9.79993 6.99438C4.83118 6.99438 0.799927 11.0256 0.799927 15.9944C0.799927 20.9631 4.83118 24.9944 9.79993 24.9944C14.7687 24.9944 18.7999 20.9631 18.7999 15.9944C18.7999 14.2319 18.2937 12.5881 17.4187 11.2006L22.4624 6.15689L23.5187 7.21313C23.9937 7.68813 24.7999 7.35063 24.7999 6.68188V1.74438C24.7999 1.33188 24.4624 0.994385 24.0499 0.994385V0.994385ZM9.79993 20.9944C7.04368 20.9944 4.79993 18.7506 4.79993 15.9944C4.79993 13.2381 7.04368 10.9944 9.79993 10.9944C12.5562 10.9944 14.7999 13.2381 14.7999 15.9944C14.7999 18.7506 12.5562 20.9944 9.79993 20.9944Z" />
          </svg>
        </div>
      </div>

      <div className="line-graphic"></div>
    </StyledAnimalCard>
  );
};

const StyledAnimalCard = styled.article`
  width: ${(p) => p.theme.size.pixel(256)};
  background-color: ${(p) => p.theme.color.grey[100]};
  position: relative;
  box-shadow: ${(p) => p.theme.shadow.big};

  .photo-wrapper {
    height: ${(p) => p.theme.size.pixel(192)};
  }

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    font-size: 2rem;
    font-family: ${(p) => p.theme.font.serif};
    color: ${(p) => p.theme.color.primary.dark};
    line-height: 100%;
  }

  .detail-block {
    padding: ${(p) => p.theme.size[24]};
    padding-bottom: ${(p) => p.theme.size[32]};
    position: relative;
  }

  .name {
    margin-bottom: ${(p) => p.theme.size[16]};
  }

  .age {
    font-size: 1.1875rem;
    color: ${(p) => p.theme.color.grey[800]};
  }

  .gender_indicator {
    position: absolute;
    top: -${(p) => p.theme.size[16]};
    right: ${(p) => p.theme.size[16]};
    border: 1px solid magenta;
    width: ${(p) => p.theme.size[48]};
    height: ${(p) => p.theme.size[48]};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(p) => p.theme.color.white};
    border-radius: 1000px;
    border: 2px solid ${(p) => p.theme.color.blue};
  }

  .gender_svg {
    fill: ${(p) => p.theme.color.blue};
    width: ${(p) => p.theme.size[24]};
  }

  .line-graphic {
    height: 4px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(p) => p.theme.color.primary.main};
  }
`;

export default AnimalCard;
