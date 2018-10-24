import React, { Component, Fragment } from 'react'
import styles from './index.scss'
import Icon from 'components/icon'
import About from 'views/article/edit'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import route from '../../router'

class Container extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <aside className={styles.aside}>
            <ul>
              { route.map((item, index) => 
                <li key={index}>
                  <div>{item.name}</div>
                  {this.renderChildren(item)}
                </li>
                )
              }
            </ul>
          </aside>
          <main className={styles.main}>
          {
            route.map((item, index) =>
              this.renderChildren(item, true)
            )
          }
            {/* <Route path="/" component={About} /> */}
          </main>
        </Fragment>
      </Router>
    )
  }

  renderChildren(item, route) {
    if(item.children || Boolean(item.chilren.length)) {
      if(route) {
        return (
          item.children.map((subitem, subindex) => 
            <Route key={subindex} path={item.path + subitem.path} component={subitem.components} />
          )
        )
      } else {
        return (
          <ul>
          {
            item.children.map((subitem, subindex) => 
              <li key={subindex}><Link to={item.path + subitem.path}>{subitem.name}</Link></li>
            )
          }
        </ul> 
        )
      }
    }
  }
}

export default Container