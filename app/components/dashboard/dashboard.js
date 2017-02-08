import React, {
  Component
} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

class Dashboard extends Component {

  _renderTitleIndicator() {
      return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
  }

  _renderDotIndicator() {
      return <PagerDotIndicator pageCount={3} />;
  }

  _renderTabIndicator() {
      let tabs = [{
              text: 'Profile',
              iconSource: require('../../assets/ic_shortcut_account_circle.png'),
              selectedIconSource: require('../../assets/ic_shortcut_account_circle.png')
          },{
              text: 'Dashboard',
              iconSource: require('../../assets/ic_shortcut_dashboard.png'),
              selectedIconSource: require('../../assets/ic_shortcut_dashboard.png')
          },{
              text: 'Rewards',
              iconSource: require('../../assets/ic_shortcut_beach_access.png'),
              selectedIconSource: require('../../assets/ic_shortcut_beach_access.png')
      }];
      return <PagerTabIndicator tabs={tabs} />;
  }

  render() {
    return (
      <View style={{flex:1}}>
          <IndicatorViewPager
              style={{flex:1, paddingTop:20, backgroundColor:'white'}}
              indicator={this._renderTabIndicator()}>
              <View style={{backgroundColor:'cadetblue'}}>
                  <Text>page one</Text>
              </View>
              <View style={{backgroundColor:'cornflowerblue'}}>
                  <Text>page two</Text>
              </View>
              <View style={{backgroundColor:'#1AA094'}}>
                  <Text>page three</Text>
              </View>
          </IndicatorViewPager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputText: {
    paddingTop: 40,
    alignItems: 'center'
  }
});

export default Dashboard;
