import React, { createContext, useContext } from 'react';

const CourseContext = createContext();

export const useCourse = () => useContext(CourseContext);

export const CourseProvider = ({ children, course }) => (
    <CourseContext.Provider value={course}>
        {children}
    </CourseContext.Provider>
);