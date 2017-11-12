/**
 * Created on 2017/10/30.
 * @fileoverview 封装bind 方法
 * @author event (JHONYOUNG)
 */
import React from 'react';
import _ from 'lodash';
export default class CLComponent extends React.Component {
    constructor (props, options) {
        super(props);
    }

    bindCtx (...nameList) {
        if (_.isArray(nameList[0])) {
            nameList = nameList[0];
        }
        nameList.forEach(name => {
                this[name] = this[name].bind(this)
            } 
        );
    }
}