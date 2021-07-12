import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import FundamentalIcon from "../../assets/rocket.svg";
import TelegramIcon from '../../assets/telegram-icon.svg'; 
import FacebookIcon from '../../assets/facebook-icon.svg'; 
import InstagramIcon from '../../assets/instagram-icon.svg'; 

import "react-vertical-timeline-component/style.min.css";

import "./styles.css";

type Link = {
  description: string;
  link: string;
  image?: string;
};

type TrailData = {
  title: string;
  key: number;
  date: string;
  subtitle: string;
  description: string;
  buttonText: string;
  tags: string[];
  links: Link[];
  type?: string;
};

type TrailProps = {
  data: TrailData[];
};

export function Trail(props: TrailProps) {
  let dotFirstIconStyles = { background: "#162346", boxShadow: "none" };
  let dotIconStyles = { background: "#9055A2", boxShadow: "none" };

  return (
    <div className="trail-container">
      <VerticalTimeline>
        {props.data.map((element) => {
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText != null &&
            element.buttonText != "";

          let showIcon =
            element.type == "first" ||  element.type == "end";

          let hasTags = element.tags.length > 0;

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={showIcon ? dotFirstIconStyles : dotIconStyles}
              contentStyle={{
                background: "#B185A7",
                display: "flex",
                flexDirection: "column",
              }}
              contentArrowStyle={{ borderRight: "7px solid #B185A7" }}
              //   icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              {showIcon ? (
                <img
                  className="vertical-timeline-element-image"
                  src={FundamentalIcon}
                />
              ) : null}
              <div>
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <div className="vertical-timeline-element-title-tags">
                {hasTags && element.key != 1
                  ? element.tags.map((tag) => {
                      return <span className={tag} >{tag}</span>;
                    })
                  : null}
                  </div>
              </div>
              <h5 className="vertical-timeline-element-subtitle">
                {element.subtitle}
              </h5>
              <p id="description">{element.description}</p>

               {
                   element.type == "end" ?  
                    <div className="vertical-timeline-element-social-icons">
                    <img src={ TelegramIcon }/>
                    <img src={ FacebookIcon }/>
                    <img src={ InstagramIcon }/>
                    </div>
                   : 
            
                element.links.map((link) => {
                return (
                  <a
                    className="vertical-timeline-element-links"
                    href={link.link}
                  >
                    {link.description}
                  </a>
                );
              })}

              {hasTags && element.key == 1 ? (
                <div className="vertical-timeline-element-tags">
                  {element.tags.map((tag) => {
                    return <span>{tag}</span>;
                  })}
                </div>
              ) : null}

              {showButton && (
                <a
                  className={`button cardButton`}
                  //   ${
                  //     isWorkIcon ? "workButton" : "schoolButton"
                  //   }

                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
