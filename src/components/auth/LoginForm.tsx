import React, { useState } from 'react';
import { Mail, Key } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        icon={Mail}
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="Email address"
        required
      />

      <InputField
        icon={Key}
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Password"
        required
      />

      {error && (
        <div className="text-red-600 text-sm text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-lg animate-shake">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full py-3 px-4 text-white text-sm font-medium rounded-lg
                 bg-gradient-to-r from-blue-600 to-indigo-600
                 hover:from-blue-700 hover:to-indigo-700
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                 transform transition-all duration-150 hover:scale-[1.02]
                 flex items-center justify-center gap-2"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;