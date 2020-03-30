import React, {Component} from 'react'
import qs from "qs"
import { Checkbox,Button,message } from 'antd'
import {withRouter} from "react-router-dom"
import {httprequest} from "../../service/httprequest"

const CheckboxGroup = Checkbox.Group

@withRouter
class ChooseCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            disabled: false,
            plainOptions :[],
            checkedList:[],
            courseList:[]
        }
    }

    componentDidMount() {
        httprequest.post("/student/getallcoursebyid",qs.stringify({id:18}))
            .then(resp => {
                    var plainarr = [];
                    var checkedList = [];

                    resp.data.forEach(item => {
                        plainarr.push(item.cname);
                        if(item.subscribe == 1){
                            checkedList.push(item.cname)
                        }
                    })
                    this.setState({
                        plainOptions:plainarr,
                        checkedList,
                        courseList:resp.data,
                        indeterminate:checkedList.length != 0
                    })
            },
            err => {
                message.error(err.message)
            })
    }

    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < this.state.plainOptions.length,
            checkAll: checkedList.length === this.state.plainOptions.length,
        });
    }

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? this.state.plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    submitChoose = () => {
        if(this.state.checkedList.length == 0){
            message.error("请选择你的课程！");
            return
        }
        let arr = [];
        this.state.courseList.filter(items => {
            for(let i=0; i< this.state.checkedList.length; i++){
                if(this.state.checkedList[i] == items.cname) {
                    arr.push(items.cid);
                    break;
                }
            }
        })
        httprequest.post("/student/userCourses",{id:18,list:arr})
            .then(resp => {
                if(resp.success){
                    message.info("选择课程成功！！！");
                    this.props.history.push("/admin/inform");
                }
            })
    }

    render() {
        return (
            <div>
                <div className="site-checkbox-all-wrapper">
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup
                    options={this.state.plainOptions}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                />
                <br />
                <Button style={{marginTop:10}} type='primary' onClick={this.submitChoose}>确认选择</Button>
            </div>
        );
    }
}

export default ChooseCourse;