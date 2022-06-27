export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
    <div className="container">
      <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="user-type"
            id="user-type-1"
            value="personal"
          />
          <label className="form-check-label" htmlFor="user-type-1">
            Personal
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="user-type"
            id="user-type-2"
            value="company"
          />
          <label className="form-check-label" htmlFor="user-type-2">
            Company
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:*
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="experience-level" className="form-label">
            Experience level
          </label>
          <select
            className="form-select mb-3"
            id="experience-level"
            name="experience-level"
          >
            <option value="1">Novice</option>
            <option value="2">Beginner</option>
            <option value="3">Mid-level</option>
            <option value="4">Advanced</option>
            <option value="5">Expert</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Password repeat:
          </label>
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
