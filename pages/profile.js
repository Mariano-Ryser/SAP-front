// pages/profile.js
export async function getServerSideProps(context) {
    const token = context.req.cookies.token; // Usar cookies es más seguro
    if (!token) {
      return { redirect: { destination: '/login' } };
    }
    // ... verificar token con tu API si es necesario
  }