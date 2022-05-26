import ContainerInfo from "../components/about/containersInfo";
import Johan_Sora from "../assets/img/foto.JPG";

const About = () => {
  return (
    <div className="mainAbout">
      <h1>ABOUT</h1>
      <div className="containerInfo">
        <div className="textDescription">
          <ContainerInfo title={"NAME"} text={"Johan Sebastián Sora"} />
          <ContainerInfo
            title={"DESCRIPTION"}
            text={
              "I am a full stack developer graduated from 'Make it real'. I am a creative, curious and enthusiastic person. I have knowledge about different technologies such as JavaScript, HTML, CSS and React. I like to create new things that help people every day"
            }
          />
          <ContainerInfo
            title={"THREE THIGS I LEARNED"}
            text={
              "In this Bootcamp I learned many things but the most important thing that I liked is React, Redux, AJAX and I consider that my programming logic is better than when I started the bootcamp"
            }
          />
          <ContainerInfo title={"EMAIL"} text={"Johansp0305@gmail.com"} />
          <ContainerInfo
            title={"GITHUB"}
            text={
              <a
                href="https://github.com/Johan0305?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Johan0305?tab=repositories
              </a>
            }
          />
        </div>
        <div className="imagePersonal">
          <img src={Johan_Sora} alt="Johan_Sora"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
