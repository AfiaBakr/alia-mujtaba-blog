"use client";

import React, { useState, useEffect } from 'react';

type CommentType = {
  id: number;
  name: string;
  comment: string;
  timestamp: string;
};

const Comments: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load comments from localStorage on mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === '' || comment.trim() === '') {
      alert('Name and comment are required!');
      return;
    }

    const newComment: CommentType = {
      id: Date.now(),
      name,
      comment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setName('');
    setComment('');
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleEditComment = (id: number) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setName(commentToEdit.name);
      setComment(commentToEdit.comment);
      setEditingId(id);
    }
  };

  const handleUpdateComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId !== null) {
      setComments(
        comments.map((comment) =>
          comment.id === editingId
            ? { ...comment, name, comment, timestamp: new Date().toLocaleString() }
            : comment
        )
      );
      setName('');
      setComment('');
      setEditingId(null);
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      <form onSubmit={editingId ? handleUpdateComment : handleAddComment} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium mb-1">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Write your comment"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {editingId ? 'Update Comment' : 'Add Comment'}
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <p className="font-semibold">
              {comment.name}{' '}
              <span className="text-xs text-gray-500">({comment.timestamp})</span>
            </p>
            <p className="text-gray-700 mt-2">{comment.comment}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEditComment(comment.id)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="text-red-500 hover:underline mb-20"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
