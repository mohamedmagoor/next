'use client'
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const formSchema = z.object({
  emailAddress : z.string().email(),
  password : z.string().min(3),
  passwordConfirm : z.string(),
  accountType : z.enum(["person","company"]),
  companyName : z.string().optional()
}).refine(({password,passwordConfirm})=>{
  return password === passwordConfirm

},{
  message:'Passwords do not match',
  path:["passwordConfirm"]
}).refine((data)=>{
  if(data.accountType === "company"){
    return !!data.companyName
  }
  return true
  
},{
  message:'Company name is required',
  path:["companyName"]
})
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver : zodResolver(formSchema),
    defaultValues:{
      emailAddress : '',
      companyName :'',
      password : '',
      passwordConfirm :''
    },
  })
  const accountType = form.watch("accountType")
  const handelSubmit = (vales:z.infer<typeof formSchema>) =>{
    console.log(vales)
  }

  return <>
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handelSubmit)} className='max-w-md w-full flex flex-col gap-4'>
        <FormField control={form.control} name='emailAddress' render={({field})=>{
          return  <FormItem>
          <FormLabel>Email Address</FormLabel>
          <FormControl>
            <Input type='email' placeholder="Email Address" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
        }} / >
        <FormField control={form.control} name='accountType' render={({field})=>{
          return <>
          <FormItem>
          <FormLabel>Account Type</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange}>
              <SelectTrigger>
              <SelectValue placeholder="Select an acoount type"  />
            </SelectTrigger>
            <SelectContent>
    <SelectItem value="person">Personal</SelectItem>
    <SelectItem value="company">Company</SelectItem>
  </SelectContent>
            </Select>
            
          </FormControl>
          <FormMessage />
        </FormItem>
          </>  
        }} / >

          {accountType == 'company' && <>
          
            <FormField control={form.control} name='companyName' render={({field})=>{
          return  <FormItem>
          <FormLabel>Company Name</FormLabel>
          <FormControl>
            <Input  placeholder="Company Name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
        }} / ></>}


           <FormField control={form.control} name='password' render={({field})=>{
          return  <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type='password' placeholder="Password" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
        }} / >

            <FormField control={form.control} name='passwordConfirm' render={({field})=>{
          return  <FormItem>
          <FormLabel>PasswordConfirm</FormLabel>
          <FormControl>
            <Input type='password' placeholder="PasswordConfirm" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
        }} / >
          <Button className='w-full' type='submit'>Submit</Button>
      </form>

    </Form>
  </main>
  </>


   }
  

