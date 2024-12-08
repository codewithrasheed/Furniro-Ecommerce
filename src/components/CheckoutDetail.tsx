"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function BillingDetails() {
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer")

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="mb-6 text-xl font-medium">Billing details</h1>
          <form className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required className="w-full" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required className="w-full" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="companyName">Company Name (optional)</Label>
              <Input id="companyName" className="w-full" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country">Country / Region</Label>
              <Select>
                <SelectTrigger id="country" className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="streetAddress">Street address</Label>
              <Input id="streetAddress" required className="w-full" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">Town / City</Label>
              <Input id="city" required className="w-full" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="province">Province</Label>
              <Select>
                <SelectTrigger id="province" className="w-full">
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ab">Alberta</SelectItem>
                  <SelectItem value="bc">British Columbia</SelectItem>
                  <SelectItem value="on">Ontario</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zipCode">ZIP code</Label>
              <Input id="zipCode" required className="w-full" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required className="w-full" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" required className="w-full" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="additionalInfo">Additional information</Label>
              <Textarea
                id="additionalInfo"
                className="min-h-[100px] resize-none w-full"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </div>
          </form>
        </div>
        <div className="lg:pl-8">
          <div className="rounded-lg p-4 sm:p-6">
            <div className="flex justify-between items-center">
              <h2 className="mb-4 text-base sm:text-lg font-semibold">Product</h2>
              <h2 className="mb-4 text-base sm:text-lg font-semibold">Subtotal</h2>
            </div>
            <div className="mb-4 flex justify-between pb-4 text-xs sm:text-sm">
              <span className="text-gray-600">Asgaard sofa &nbsp; X &nbsp; 1</span>
              <span>Rs 250,000.00</span>
            </div>
            <div className="mb-4 flex justify-between pb-4 text-sm sm:text-base">
              <span className="font-medium">Subtotal</span>
              <span>Rs 250,000.00</span>
            </div>
            <div className="mb-4 flex justify-between text-sm sm:text-base">
              <span className="font-medium">Total</span>
              <span className="ml-1 text-xl sm:text-2xl font-bold text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
            <RadioGroup
              defaultValue="bank-transfer"
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="mb-4"
            >
              <div className="flex items-start space-x-3 rounded-lg p-4">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                <div className="grid gap-1.5">
                  <Label htmlFor="bank-transfer" className="font-medium text-sm sm:text-base">
                    Direct Bank Transfer
                  </Label>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your
                    order will not be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>
            </RadioGroup>
            <RadioGroup
              defaultValue="bank-transfer1"
              value=""
              className=""
            >
              <div className="flex items-start space-x-3 rounded-lg p-4">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                <div className="grid gap-1.5">
                  <Label htmlFor="bank-transfer" className="font-medium mt-1 text-sm sm:text-base">
                    Direct Bank Transfer
                  </Label>
                </div>
              </div>
            </RadioGroup>

            <RadioGroup
              defaultValue="cash-on-delivery"
              value=""
              className="mb-2"
            >
              <div className="flex items-start space-x-3 rounded-lg p-4">
                <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" className="mt-1" />
                <div className="grid gap-1.5">
                  <Label htmlFor="bank-transfer" className="font-medium mt-1 text-sm sm:text-base">
                    Cash on Delivery
                  </Label>
                </div>
              </div>
            </RadioGroup>
            <div className="mb-4 text-xs sm:text-sm text-gray-500">
              Your personal data will be used to support your experience throughout this website, to manage access to your
              account, and for other purposes described in our{" "}
              <a href="#" className="text-black font-semibold hover:underline">
                privacy policy
              </a>
              .
            </div>
            <Button className="rounded-md border-2 border-[#000] bg-transparent w-full sm:w-auto sm:mx-48 mt-4 text-black hover:bg-black hover:text-white" size="lg">
              Place order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

