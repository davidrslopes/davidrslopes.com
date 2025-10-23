import { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

export function Hero({ translations }) {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <main>
        <section className="bg-dark text-secondary px-4 py-5 text-center vh-100">
          <div className="py-5">
            <h1 className="display-5 fw-bold text-white text-shadow-lg">
              {translations.h1}
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4 text-shadow-sm">
                {translations.p}
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a
                  href="mailto:davidrslopes@gmail.com"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  {translations.btnContact}
                </a>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => setShowToast(true)}
                >
                  {translations.btnNothing}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 11 }}>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          className="shadow-lg"
        >
          <Toast.Header>
            <img
              src="/profile.jpg"
              className="rounded me-2"
              height="32"
              alt="David Lopes"
            />
            <strong className="me-auto">{translations.toastTitle}</strong>
            <small>{translations.toastWhen}</small>
          </Toast.Header>
          <Toast.Body>
            {translations.toastText}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
