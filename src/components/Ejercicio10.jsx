import { useForm } from 'react-hook-form';

function LoginForm() {
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label>Email:</label>
        <input
            type="email"
            {...register('email', { required: 'El email es requerido' })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div>
        <label>Contraseña:</label>
        <input
            type="password"
            {...register('password', {
            required: 'La contraseña es requerida',
            minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
            },
            })}
        />
        {errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
        </div>

        <button type="submit">Iniciar Sesión</button>
    </form>
    );
}

export default LoginForm;
