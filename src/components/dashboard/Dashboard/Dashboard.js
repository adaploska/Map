import React, { Component } from "react";
import Notification from "../Notifications/Notifications"
import WholeMap from "../../projects/WholeMap/WholeMap"

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard ">
                <div className="row">
                    <div className="col s12 m8">
                        <WholeMap />
                    </div>
                    <div className="col s12 m4">
                        <div className="row">
                            <Notification />
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
export default Dashboard