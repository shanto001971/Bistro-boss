import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit,reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {


        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imageURl = imageResponse.data.display_url
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imageURl }

                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire(
                                    'Good job!',
                                    'Added successfully',
                                    'success'
                                  )
                            }
                        })
                }

            })
    };


    return (
        <div className="w-full px-10">
            <SectionTitle subHeading={'whats new'} heading={'add an Item'} />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" {...register("name")} placeholder="Recipe Name" className="input input-bordered w-full " />
                </div>
                <div className="lg:flex gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <select {...register("category", { required: true })} defaultValue={'pick One'} className="select select-bordered">
                            <option disabled selected>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-small mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;