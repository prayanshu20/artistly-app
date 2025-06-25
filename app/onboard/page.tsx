"use client"
import Header from "@/components/Header"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.array().min(1).required(),
  location: yup.string().required()
})

export default function OnboardPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

  const handleSomething = (data: FormDataType) => { ... }
 {
    console.log("Form submitted", data)
  }

  return (
    <div>
      <Header />
      <main className="p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input placeholder="Name" {...register("name")} className="border p-2 w-full" />
          {errors.name && <p className="text-red-500">Name is required</p>}

          <textarea placeholder="Bio" {...register("bio")} className="border p-2 w-full" />
          {errors.bio && <p className="text-red-500">Bio is required</p>}

          <input placeholder="Location" {...register("location")} className="border p-2 w-full" />
          {errors.location && <p className="text-red-500">Location is required</p>}

          <select multiple {...register("category")} className="border p-2 w-full">
            <option value="Singer">Singer</option>
            <option value="Dancer">Dancer</option>
            <option value="DJ">DJ</option>
          </select>
          {errors.category && <p className="text-red-500">Select at least 1 category</p>}

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </main>
    </div>
  )
}
