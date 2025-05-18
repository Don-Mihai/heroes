import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './scss/App.scss';
import Home from './pages/Home/Home';
import Heroes from './pages/Heroes/Heroes';
import Divisions from './pages/Divisions/Divisions';
import TimeOfHeroes from './pages/TimeOfHeroes/TimeOfHeroes';
import InfoHero from './pages/InfoHero';
import InfoDivision from './pages/InfoDivision';
import InfoTime from './pages/InfoTime';
import Preview from './pages/Preview/Preview';
import HumAid from './pages/HumAid/HumAid';

// 1. Глобально отключаем контекстное меню (правый клик и долгий тап)
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// Инициализация таймера неактивности
let inactivityTimer;
const INACTIVITY_TIMEOUT = 2 * 60 * 1000; // 2 минуты в миллисекундах

// Функция для сброса таймера
const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    // Перенаправление на начальную страницу
    window.location.href = '/';
  }, INACTIVITY_TIMEOUT);
};

// Отслеживание действий пользователя
const userActivityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click', 'keydown'];

// Добавление обработчиков событий
userActivityEvents.forEach((event) => {
  document.addEventListener(event, resetInactivityTimer, true);
});

// Запуск таймера при загрузке страницы
resetInactivityTimer();

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Preview />,
    },
    {
        path: '/main',
        element: <Home />,
    },
    {
        path: '/heroes',
        element: <Heroes />,
    },
    {
        path: '/divisions',
        element: <Divisions />,
    },
    {
        path: '/time',
        element: <TimeOfHeroes />,
    },
    {
        path: '/help',
        element: <HumAid />,
    },
    {
        path: '/hero-info/:id',
        element: <InfoHero />,
    },
    {
        path: '/division-info/:id',
        element: <InfoDivision />,
    },
    {
        path: '/time-info/:id',
        element: <InfoTime />,
    },
]);
root.render(<RouterProvider router={router} />);
