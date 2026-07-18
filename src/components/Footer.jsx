export default function Footer() {

  return (

    <footer className="bg-slate-950 border-t border-slate-800 py-8">

      <div className="container-custom">

        <div className="flex justify-center items-center">


          <p className="text-slate-400 text-sm text-center">

            © {new Date().getFullYear()} Atiya Qazi.
            All rights reserved.

          </p>


        </div>

      </div>

    </footer>

  );

}