import React from "react";
import Posts from "./Posts.js";

export default class Lists extends React.Component {
  state = {
    posts: [
      { id: 1, title: "Aprendendo React" },
      { id: 2, title: "A Estácio é show!" },
      { id: 3, title: "TI não tem férias" }
    ]
  };

  constructor(props) {
    super(props);

    setTimeout(() => {
      this.setState({
        posts: [
          ...this.state.posts,
          { id: 4, title: "Ainda estou aprendendo React ...." }
        ]
      });
    }, 10000);
  }

  render() {
    return this.state.posts.map(posts => (
      <Posts key={posts.id} title={posts.title} />
    ));
  }
}
