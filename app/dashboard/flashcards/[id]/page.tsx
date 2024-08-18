// pages/flashcards.tsx (or any other component file)
"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Flashcard {
    question: string;
    answer: string;
}

interface FlashcardsProps {
    docId: string;
}

function Flashcards ({params: {id}} : {params: {id: string}}) {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchFlashcards = async () => {
            try {
                console.log(id)
                const response = await axios.get<Flashcard[]>(`/api/flashcards?docId=${id}`);
                setFlashcards(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFlashcards();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {flashcards.length === 0 ? (
                <p>No flashcards available.</p>
            ) : (
                <ul>
                    {flashcards.map((flashcard, index) => (
                        <li key={index}>
                            <p><strong>Question:</strong> {flashcard.question}</p>
                            <p><strong>Answer:</strong> {flashcard.answer}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Flashcards;
