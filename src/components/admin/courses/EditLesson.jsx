import React, { useState } from 'react';
import { PlusCircle, Trash2, ChevronDown, ChevronUp, Book, Clock, FileText, Paperclip } from 'lucide-react';

export default function CourseEditor() {
    const [course, setCourse] = useState({
        title: '',
        sections: []
    });

    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const addSection = () => {
        setCourse(prevCourse => {
            const newSections = [...prevCourse.sections, { title: '', lessons: [] }];
            setExpandedSections(prev => ({
                ...prev,
                [newSections.length - 1]: true
            }));
            return {
                ...prevCourse,
                sections: newSections
            };
        });
    };

    const addLesson = (sectionIndex) => {
        setCourse(prevCourse => {
            const newSections = [...prevCourse.sections];
            newSections[sectionIndex].lessons.push({
                title: '',
                duration: '',
                description: '',
                materials: ''
            });
            return { ...prevCourse, sections: newSections };
        });
    };

    const updateSection = (index, field, value) => {
        setCourse(prevCourse => {
            const newSections = [...prevCourse.sections];
            newSections[index][field] = value;
            return { ...prevCourse, sections: newSections };
        });
    };

    const updateLesson = (sectionIndex, lessonIndex, field, value) => {
        setCourse(prevCourse => {
            const newSections = [...prevCourse.sections];
            newSections[sectionIndex].lessons[lessonIndex][field] = value;
            return { ...prevCourse, sections: newSections };
        });
    };

    const removeSection = (index) => {
        setCourse(prevCourse => ({
            ...prevCourse,
            sections: prevCourse.sections.filter((_, i) => i !== index)
        }));
        setExpandedSections(prev => {
            const newExpanded = { ...prev };
            delete newExpanded[index];
            return newExpanded;
        });
    };

    const removeLesson = (sectionIndex, lessonIndex) => {
        setCourse(prevCourse => {
            const newSections = [...prevCourse.sections];
            newSections[sectionIndex].lessons = newSections[sectionIndex].lessons.filter((_, i) => i !== lessonIndex);
            return { ...prevCourse, sections: newSections };
        });
    };

    return (
        <div className="course-editor bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <button
                    onClick={addSection}
                    className="flex items-center justify-center w-full p-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    <PlusCircle className="mr-2" size={20} />
                    Thêm Section
                </button>

                {course.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6 border border-gray-200 rounded-md overflow-hidden">
                        <div className="bg-gray-50 p-4 flex items-center justify-between">
                            <input
                                type="text"
                                value={section.title}
                                onChange={(e) => updateSection(sectionIndex, 'title', e.target.value)}
                                placeholder="Tên section"
                                className="flex-grow p-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex items-center">
                                <button
                                    onClick={() => addLesson(sectionIndex)}
                                    className="p-2 mr-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                                >
                                    <PlusCircle size={20} />
                                </button>
                                <button
                                    onClick={() => removeSection(sectionIndex)}
                                    className="p-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                                >
                                    <Trash2 size={20} />
                                </button>
                                <button
                                    onClick={() => toggleSection(sectionIndex)}
                                    className="p-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition duration-300"
                                >
                                    {expandedSections[sectionIndex] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                            </div>
                        </div>

                        {expandedSections[sectionIndex] && (
                            <div className="p-4 bg-white">
                                {section.lessons.map((lesson, lessonIndex) => (
                                    <div key={lessonIndex} className="mb-4 p-4 border border-gray-200 rounded-md">
                                        <div className="flex items-center mb-2">
                                            <Book className="mr-2 text-blue-500" size={20} />
                                            <input
                                                type="text"
                                                value={lesson.title}
                                                onChange={(e) => updateLesson(sectionIndex, lessonIndex, 'title', e.target.value)}
                                                placeholder="Tiêu đề bài giảng"
                                                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <Clock className="mr-2 text-green-500" size={20} />
                                            <input
                                                type="text"
                                                value={lesson.duration}
                                                onChange={(e) => updateLesson(sectionIndex, lessonIndex, 'duration', e.target.value)}
                                                placeholder="Thời lượng"
                                                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="flex items-start mb-2">
                                            <FileText className="mr-2 mt-2 text-yellow-500" size={20} />
                                            <textarea
                                                value={lesson.description}
                                                onChange={(e) => updateLesson(sectionIndex, lessonIndex, 'description', e.target.value)}
                                                placeholder="Mô tả"
                                                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                rows="3"
                                            />
                                        </div>
                                        <div className="flex items-start mb-2">
                                            <Paperclip className="mr-2 mt-2 text-purple-500" size={20} />
                                            <textarea
                                                value={lesson.materials}
                                                onChange={(e) => updateLesson(sectionIndex, lessonIndex, 'materials', e.target.value)}
                                                placeholder="Tài liệu"
                                                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                rows="3"
                                            />
                                        </div>
                                        <button
                                            onClick={() => removeLesson(sectionIndex, lessonIndex)}
                                            className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}