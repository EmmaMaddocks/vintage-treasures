import { useEffect } from "react"
import { useState } from "react"

const PreviousOrders = ({ currentUser }) => {


    useEffect(() => {
        fetch(`/api/users/${currentUser}}/orders`)
          .then((res) => res.json())
          .then(({ items }) => {
            console.log(items)
          });
      }, []);


}

export default PreviousOrders