const overlay = document.getElementById("overlay");
const addCustomerBtn = document.getElementById("addCustomerBtn");
const form = document.getElementById("popup-form");
const closeBtn = document.getElementById("closeBtn");
const table = document.getElementById("customer-table");
const submitBtn = document.getElementById("submitBtn");

addCustomerBtn.addEventListener("click",() => {
    overlay.style.display = "block";
    form.style.display = "block";
})

closeBtn.addEventListener("click",() => {
    overlay.style.display = "none";
    form.style.display = "none";
})

submitBtn.addEventListener("click",(e) => {
    e.preventDefault();
    overlay.style.display = "none";
    form.style.display = "none";
    table.style.visibility = "visible";
    table.style.height = "auto";

    const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const date = document.getElementById("date").value;
            const address = document.getElementById("address").value;

            // Create a new row
            const newRow = table.insertRow();

            // Insert cells into the row
            const nameCell = newRow.insertCell(0);
            const emailCell = newRow.insertCell(1);
            const phoneCell = newRow.insertCell(2);
            const dateCell = newRow.insertCell(3);
            const addressCell = newRow.insertCell(4);
            const actionCell = newRow.insertCell(5);

            // Append data to cells
            nameCell.textContent = name;
            emailCell.textContent = email;
            phoneCell.textContent = phone;
            dateCell.textContent = date;
            addressCell.textContent = address;
            actionCell.innerHTML = `
                    <button class="edit-btn"><i class="fa fa-pencil btn" aria-hidden="true"></i> </button>
                    <button class="delete-btn"><i class="fa fa-trash btn" aria-hidden="true"></i></button>
                `;

            actionCell.querySelector('.edit-btn').addEventListener('click', () => editRow(newRow));
            actionCell.querySelector('.delete-btn').addEventListener('click', () => deleteRow(newRow));
            

            // Clear form
            form.reset();
            updateRowCount();
})

function editRow(row) {
            currentEditRow = row;

            document.getElementById("name").value = row.cells[0].textContent;
            document.getElementById("email").value = row.cells[1].textContent;
            document.getElementById("phone").value = row.cells[2].textContent;
            document.getElementById("date").value = row.cells[3].textContent;
            document.getElementById("address").value = row.cells[4].textContent;

            submitBtn.style.display = "none";
            updateBtn.style.display = "block";
            overlay.style.display = "block";
            form.style.display = "block";

            updateBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const date = document.getElementById("date").value;
            const address = document.getElementById("address").value;

            if (currentEditRow) {
                // Update the existing row
                currentEditRow.cells[0].textContent = name;
                currentEditRow.cells[1].textContent = email;
                currentEditRow.cells[2].textContent = phone;
                currentEditRow.cells[3].textContent = date;
                currentEditRow.cells[4].textContent = address;

                // Reset the currentEditRow variable
                currentEditRow = null;

                // Hide the form
                form.style.display = "none";
                // Clear the form
                form.reset();
                
                // Reset buttons
                submitBtn.style.display = "block";
                updateBtn.style.display = "none";
                overlay.style.display = "none";
            }

            updateRowCount();
        });
        }

         function deleteRow(row) {
            row.remove();
            updateRowCount();
        }

        function updateRowCount() {
            console.log(rowCountDisplay.textContent = table.rows.length);
            rowCountDisplay.textContent = table.rows.length;
        }

        

        if(updateRowCount === 0){
            table.style.display = "none";
        }