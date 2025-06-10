const BookAppointmentModal = () => {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className=" w-1/2 overflow-auto max-h-[90vh] scrollbar-hidden">
          <div className="w-full h-auto bg-white px-12 py-4">
            <div className=" fixed right-2/7 z-50">
              <form method="dialog w-full">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">✕</button>
              </form>
            </div>
            <h1 className="w-full text-2xl font-bold font-primary">
              Register a patient
            </h1>
            <form action="">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full">
                <legend className="fieldset-legend">Patient Info</legend>

                <label className="label">Full Name</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Enter Your Full Name"
                />

                <label className="label">Email</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter Your Email"
                />

                <label className="label">Phone Number</label>
                <input
                  type="phone"
                  className="input w-full"
                  placeholder="Enter Your Phone Number"
                />

                <label className="label">Pick a Date</label>
                <input
                  type="date"
                  className="input w-full"
                  placeholder="Enter Your Phone Number"
                />

                <label className="label">Patient Gender</label>
                <select defaultValue="Pick a browser" className="select w-full">
                  <option disabled={true}>Select a gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>

                <label className="label">Address</label>
                <textarea
                  placeholder="Enter Your Address"
                  className="textarea textarea-md w-full"
                ></textarea>

                <button className="btn bg-[#1294EB] mt-4 text-white">
                  Book Appointment
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BookAppointmentModal;
