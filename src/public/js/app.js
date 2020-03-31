$(function(){
       
    $('#getProduct').on('click', (e)=>{
         $.ajax({
             url:'/products',
             type:'GET',
             success:function(response){
                let template ='';
                $('#product-content').html('')
                response.forEach(product => {
                   template += 
                   `  
                      <tr class="row">
                      <td class="id">${product.id}</td>
                      <td>
                         <input class="name" type="text" value=${product.name} >
                      </td>
                       <td>
                           <button class="update">update</button>
                           <button _id="${product.id}" id="delete">delete</button>
                       </td>
                      </tr>
                   `  
                });

                $('#product-content').html(template)
             }
         })


    });

    $('#form').on('submit', (e)=>{
        e.preventDefault();
       let product =  $('#product').val();

       $.ajax({
           url:'/products',
           type:'POST',
           data:{
               product:product
           },
           success:function(res){
            console.log(res)
            $('#form').trigger('reset')
             
           }
      })
    })
   

    $(document).on('click', '#delete', function(e){
        let id = e.target.getAttribute('_id');
        $.ajax({
            url:'/product/'+id,
            type:'DELETE',
            success:function(res){
             console.log(res)
              
            }
       })
    })

    $(document).on('click', '.update', function() {
        let row = $(this).closest('tr');
        let id = row.find('.id').text();
        let product = row.find('.name').val();
    
        $.ajax({
            url:'/product/'+id,
            type:'PUT',
            data:{
                prod:product
            },
            success:function(res){
                console.log(res)
            }
            
        })
      });
})
