import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {withPrefix, htmlToReact, markdownify} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <section className="post">
                {_.get(this.props, 'page.frontmatter.content_img_path', null) && (
                <img className="header-image" src={withPrefix(_.get(this.props, 'page.frontmatter.content_img_path', null))} alt={_.get(this.props, 'page.frontmatter.content_img_alt', null)}/>
                )}
                <header className="hero">
                    <div className="copy">
                        <h1>{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                        {_.get(this.props, 'page.frontmatter.subtitle', null) && (
                        <h3>{htmlToReact(_.get(this.props, 'page.frontmatter.subtitle', null))}</h3>
                        )}
                        <h3 className="publish-date">{moment(_.get(this.props, 'page.frontmatter.date', null)).strftime('%A, %B %e, %Y')}</h3>
                    </div>
                </header>
                <div className="content">
                    {markdownify(_.get(this.props, 'page.markdown', null))}
                </div>
            </section>
            </Layout>
        );
    }
}
