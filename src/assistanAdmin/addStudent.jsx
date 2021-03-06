import React,{Component} from "react";

class AddStudent extends Component{
    render(){
        return(
            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Add Student</div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Basic Information</header>

                                </div>
                                <div className="card-body" id="bar-parent">
                                    <form action="#" id="form_sample_1" className="form-horizontal">
                                        <div className="form-body">
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">First Name
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="firstname" placeholder="enter first name"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Last Name
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="lastname" placeholder="enter last name"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Roll No
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="rollNo" placeholder="enter roll no"
                                                           className="form-control input-height"/></div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Email
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-envelope text-info"></i></div>
                                                        </div>
                                                        <input type="email" className="form-control" id="nombre"
                                                               name="email" placeholder="ejemplo@gmail.com" required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Registration Date
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div>
                                                        <input type="calendar" className="form-control" id="nombre"
                                                               name="calendar" placeholder="dd/mm/yy" required/>
                                                    </div>
                                                    <input type="hidden" id="dtp_input2" value=""/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Class
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control input-height" name="department">
                                                        <option value="">Select...</option>
                                                        <option value="Category 1">Computer</option>
                                                        <option value="Category 2">Mechanical</option>
                                                        <option value="Category 3">Mathematics</option>
                                                        <option value="Category 3">Commerce</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Gender
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control input-height" name="gender">
                                                        <option value="">Select...</option>
                                                        <option value="Category 1">Male</option>
                                                        <option value="Category 2">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Mobile No.
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="number" type="text" placeholder="mobile number"
                                                           className="form-control input-height"/></div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Parents Name
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="parentName"
                                                           placeholder="enter parents name"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Parents Mobile No.
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="number" type="text" placeholder="parents mobile number"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Date Of Birth
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div>
                                                        <input type="calendar" className="form-control" id="nombre"
                                                               name="calendar" placeholder="dd/mm/yy" required/>
                                                    </div>
                                                    <input type="hidden" id="dtp_input5" value=""/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Address
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <textarea name="address" placeholder="address"
                                                              className="form-control-textarea" rows="5"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Profile Picture
                                                </label>
                                                <div className="compose-editor">
                                                    <input type="file" className="default" multiple/>
                                                </div>
                                            </div>
                                            <div className="form-actions">
                                                <div className="row">
                                                    <div className="offset-md-3 col-md-9">
                                                        <button type="submit" className="btn btn-info m-r-20">Submit
                                                        </button>
                                                        <button type="button" className="btn btn-default">Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddStudent;