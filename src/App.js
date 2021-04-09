import "./App.css";
import logo from "./images/logo.png";
import LogoRenderer from "./components/LogoRenderer";
import { Layout, Menu, Col, Row, Card, List } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  InstagramOutlined,
  GithubOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
const data = [
  {
    title: "Conway's Game of Life",
    description:
      "Created a simulation of the popular algorithm. The graph allows you to change the state of a specific cell and run through the algorithm to determine whether or not it is alive or dead.",
    repo: "https://github.com/baltabatuhan/game-of-life",
    project: "https://gameol-batuhan.netlify.app/",
  },
  {
    title: "Tidy Hive",
    description:
      "TidyHive simplifies home management with an easy-to-use interface and a robust feature set allowing you organize everything in your home from day-to-day tasks to larger projects.",
    repo: "https://github.com/Lambda-School-Labs/homerun-fe",
    project: "https://tidyhive-fe.herokuapp.com/",
  },
  {
    title: "Kodritma",
    description: "Free coding platform.",
    repo: "https://github.com/Kodritma",
    project: "https://kodritma.com/",
  },
  {
    title: "Covid-19",
    description: "Free covid-19 tracker.",
    repo: "https://github.com/baltabatuhan/covid19",
    project: "https://batuhanbalta.com/",
  },
];

const { Header, Content, Footer } = Layout;
const images = [
  { name: "Python", level: 30 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 50 },
  { name: "React / React Native", level: 90 },
  { name: "Redux", level: 80 },
  { name: "Node.js & Express", level: 70 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 95 },
  { name: "SASS / SCSS", level: 90 },
  { name: "PostgreSQL", level: 60 },
  { name: "GraphQL", level: 50 },
  { name: "Jest", level: 60 },
  { name: "Material UI", level: 70 },
  { name: "Ant Design", level: 85 },
];
const socialIcons = [
  {
    href: "https://www.linkedin.com/in/baltabatuhan/",
    component: LinkedinFilled,
    color: "#0073b1",
  },
  {
    href: "https://github.com/baltabatuhan",
    component: GithubFilled,
    color: "#24292e",
  },
  {
    href: "https://twitter.com/haydarinnarina",
    component: TwitterSquareFilled,
    color: "rgb(29, 161, 242)",
  },
  {
    href: "https://www.instagram.com/baltabatuhan/",
    component: InstagramOutlined,
    color: "rgb(188, 42, 141)",
  },
];

function App() {
  return (
    <Layout className="height-100">
      <Header className="header">
        <img src={logo} />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">About Me</Menu.Item>
          <Menu.Item key="2">Projects</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="block">
          <h2>Welcome!</h2>
          <p className="welcome-text">
            My name is Batuhan Balta. I am a software developer specializing in
            full-stack web applications with JavaScript and TypeScript. These
            are the languages, frameworks, and libraries I am familiar with.
          </p>
          <Row justify="center">
            {images.map(({ name, level }, index) => {
              return (
                <Col xs={12} sm={8} md={4} key={name}>
                  <LogoRenderer
                    alt={name}
                    level={level}
                    index={index}
                    size={80}
                    margin={20}
                  />
                </Col>
              );
            })}
          </Row>
          <p className="social-icons">
            {socialIcons.map(({ href, component: Component, color }) => {
              return (
                <a href={href} target="_blank" rel="noreferrer">
                  <Component style={{ fontSize: 40, color }} />
                </a>
              );
            })}
          </p>
        </div>
        <div id="portfolio" className="home dark-bg">
          {" "}
          <div className="block">
            <h2>Portfolio</h2>
            <p className="welcome-text">
              Here are some applications I have built.
            </p>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 2,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    title={item.title}
                    actions={[
                      <a href={item.repo} target="_blank" rel="noreferrer">
                        <GithubOutlined style={{ fontSize: 18 }} />
                      </a>,
                      <a href={item.project} target="_blank" rel="noreferrer">
                        <DesktopOutlined style={{ fontSize: 18 }} />
                      </a>,
                    ]}
                  >
                    {item.description}
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
