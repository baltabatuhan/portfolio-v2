import "./App.css";
import logo from "./images/logo.png";
import LogoRenderer from "./components/LogoRenderer";
import { Layout, Menu, Col, Row } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  InstagramOutlined,
} from "@ant-design/icons";

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
      </Content>
    </Layout>
  );
}

export default App;
