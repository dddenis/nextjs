import dynamic from 'next/dynamic';
import Router from 'next/router';
import React from 'react';
import Widget from 'widget-lite';

// const Widget = dynamic(import('widget-lite'));
const DynamicTemp = dynamic(import('widget-lite/lib/steps/TextStep'));

export default class Index extends React.Component {
  static getInitialProps({ query }) {
    return { showMore: Boolean(query.showMore) };
  }

  toggleShowMore = () => {
    const { showMore } = this.props;
    if (showMore) {
      Router.push('/');
      return;
    }

    Router.push('/?showMore=1');
  };

  render() {
    const { showMore } = this.props;

    return (
      <div>
        <Widget
          steps={[
            {
              type: 'text',
              props: {
                text: 'Step 1',
              },
            },
            {
              type: 'img',
              props: {
                src: 'https://cdn.iconscout.com/icon/free/png-256/react-226053.png',
              },
            },
            {
              type: 'text',
              props: {
                text: 'Step 3',
              },
            },
          ]}
          dynamic={dynamic}
        />

        <DynamicTemp text="temp" />

        <p>HOME PAGE is here!</p>
      </div>
    );
  }
}
