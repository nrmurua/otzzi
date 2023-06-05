
import { NextResponse } from 'next/server';
import jwt_decode from 'jwt-decode';
import Cookies from 'cookies';

export function middlewareLogin(req, res) {
  const cookies = new Cookies(req, res);
  const token = cookies.get('token');

  if (token) {
    let decodedToken;
    try {
      decodedToken = jwt_decode(token);
    } catch (error) {
      console.error("Invalid token: ", error);
      return NextResponse.redirect('/login');
    }

    // Suponiendo que tu token tiene un campo 'role' con valor 'customer' o 'artist'
    if (decodedToken.role === 'customer') {
      // Aquí podrías redirigir al usuario a la página de inicio de cliente
      return NextResponse.rewrite('/')
    } else if (decodedToken.role === 'artist') {
      // Aquí podrías redirigir al usuario a la página de inicio de artista
      return NextResponse.rewrite('/signup')
    }
  }

  // Si el usuario no tiene un token, redirige al inicio de sesión
  return NextResponse.redirect('/login');
}