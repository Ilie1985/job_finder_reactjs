import React from "react";
import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { handleChange } from "../../features/job/jobSlice";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => {
    return store.job;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all the fields");
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;

    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

  const { user } = useSelector((store) => {
    return store.user;
  });

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : " add job"}</h3>

        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />

          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />

          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => {
                console.log("clear values");
              }}
            >
              clear
            </button>

            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
