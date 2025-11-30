export default function Footer() {
  return (
    <footer className="w-full py-10 bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center">
          © {new Date().getFullYear()} Aliens Hub — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
