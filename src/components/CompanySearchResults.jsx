import { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobsAction } from "../redux/actions";
import { TypeH2 } from "react-bootstrap-icons";

const CompanySearchResults = () => {
  const jobs = useSelector(state => state.companyJobs.content);
  const isLoading = useSelector(state => state.companyJobs.isLoading);
  const hasError = useSelector(state => state.companyJobs.hasError);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    dispatch(getCompanyJobsAction(params));
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {isLoading === false ? (
            jobs.map(jobData => <Job key={jobData._id} data={jobData} />)
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner variant="primary" />
            </div>
          )}
          {hasError && <h2>Sorry, there was an error, try again later!</h2>}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
