import { Button } from '../UI/Button';
import style from './FormElem.module.css';
import { Input } from '../UI/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import submittedBanner from '../assets/submittedBanner.png'

export function FormElem(props) {
    const { button, infoText, onClose, active } = props;
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        console.log(data);
        setIsSubmitted(true);
    }

    useEffect(() => {
        let timeout;
        if (!active) {
            timeout = setTimeout(() => {
                setIsSubmitted(false);
                reset();
            }, 500);
        }
        return () => clearTimeout(timeout);
    }, [active, reset]);


    if (isSubmitted) {
        return (
            <div className={style.success_message}>
                <div className={style.success_icon}>
                    <img src={submittedBanner}  alt='submittedBanner'/>
                </div>
                <h2>Thank you!</h2>
                <p>Thank you, we have received your application and will contact you soon!</p>
                <Button
                    text="Super!"
                    className={style.submittedBtn}
                    onClick={onClose}
                />
            </div>
        );  
    }

    return (
        <div>
            <form className={style.form_area} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.input_area}>
                    <p className={style.input_title}>
                        Name
                        <span className={style.requiredStar}>*</span>
                    </p>
                    <Input
                        placeholder="Enter name"
                        className={errors.name ? style.input_invalid : ""}
                        {...register("name", {
                            required: "This field is required",
                            minLength: {
                                value: 2,
                                message: "Name must be more than 2 letters",
                            },
                        })}
                    />
                    {errors.name && (
                        <p className={style.warning_text}>{errors.name.message}</p>
                    )}
                </div>

                <div className={style.input_area}>
                    <p className={style.input_title}>
                        Email
                        <span className={style.requiredStar}>*</span>
                    </p>
                    <Input
                        placeholder="Enter email"
                        className={errors.email ? style.input_invalid : ""}
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value:
                                    /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                                message: "Invalid email",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className={style.warning_text}>{errors.email.message}</p>
                    )}
                </div>

                <div className={style.input_area}>
                    <p className={style.input_title}>
                        Phone number
                        <span className={style.requiredStar}>*</span>
                    </p>
                    <Input
                        placeholder="+1 900 000 00 00"
                        className={`${errors.phone ? style.input_invalid : ""} ${style.phone_input}`}
                        {...register("phone", {
                            required: "This field is required",
                            pattern: {
                                value: /^[0-9]{10,}$/,
                                message: "Invalid phone number",
                            },
                        })}
                    />
                    {errors.phone && (
                        <p className={style.warning_text}>{errors.phone.message}</p>
                    )}
                </div>


                <div className={style.input_area}>
                    <p className={style.input_title}>Company</p>
                    <Input
                        placeholder="Enter company"
                        className={errors.company ? style.input_invalid : ""}
                        {...register("company", {
                            minLength: {
                                value: 2,
                                message: "Company must be more than 2 letters",
                            },
                        })}
                    />
                    {errors.company && (
                        <p className={style.warning_text}>{errors.company.message}</p>
                    )}
                </div>

                <div className={style.input_area}>
                    <p className={style.input_title}>Website/Store URL</p>
                    <Input
                        placeholder="Enter Website/Store URL"
                        className={errors.url ? style.input_invalid : ""}
                        {...register("url", {
                            pattern: {
                                message: "Invalid URL",
                                value: /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.+)?$/,
                            },
                        })}
                    />
                    {errors.url && (
                        <p className={style.warning_text}>{errors.url.message}</p>
                    )}
                </div>

                {!isValid && (
                    <p className={style.required}>
                        Please fill in all required fields
                    </p>
                )}

                <p href='/' className={style.info_text} dangerouslySetInnerHTML={{ __html: infoText }}></p>

                <Button
                    text={button.submit}
                    disabled={!isValid}
                />
            </form>
        </div>
    );
}