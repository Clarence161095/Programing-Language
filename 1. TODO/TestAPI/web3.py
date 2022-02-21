from web3 import Web3
import time

bsc = "https://bsc-dataseed.binance.org/"
web3 = Web3(Web3.HTTPProvider(bsc))

print(web3.isConnected())

panRouterContractAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E'

sender_address = '0x0D68d7FeFc550Baf82560B156B1E1422ACcBE3C3' #TokenAddress of holder
spend = web3.toChecksumAddress("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c")  #WBNB Address

balance = web3.eth.get_balance(sender_address)
print(balance)

humanReadable = web3.fromWei(balance,'ether')
print(humanReadable)
 
#Contract id is the new token we are swaping to
contract_id = web3.toChecksumAddress("0xd07e82440a395f3f3551b42da9210cd1ef4f8b24")   #PRL TOKEN
 
#Setup the PancakeSwap contract
contract = web3.eth.contract(address=panRouterContractAddress)

#Create token Instance for Token
sellTokenContract = web3.eth.contract(contract_id)

#Get Token Balance
balance = sellTokenContract.functions.balanceOf(sender_address).call()
symbol = sellTokenContract.functions.symbol().call()
readable = web3.fromWei(balance,'ether')
print("Balance: " + str(readable) + " " + symbol)
 

start = time.time()
while True:
    print("Checking...")
    tokenValue = web3.toWei(int(web3.fromWei(sellTokenContract.functions.balanceOf(sender_address).call(),'ether')), 'ether')
    if(tokenValue > 0):
        num = int(tokenValue/1000000000000000000)
        print("Swapping {num} {symbol} for BNB")
        #Swaping exact Token for ETH 

        pancakeswap2_txn = contract.functions.swapExactTokensForETH(
                    tokenValue ,0, 
                    [contract_id, spend],
                    sender_address,
                    (int(time.time()) + 1000000)

                    ).buildTransaction({
                    'from': sender_address,
                    'gasPrice': web3.toWei('6','gwei'),
                    'nonce': web3.eth.get_transaction_count(sender_address),
                    })
            
        signed_txn = web3.eth.account.sign_transaction(pancakeswap2_txn, private_key="b3038249d2ce3b7657b09e22817a98460759078dfeb28fc34cb6546e50f15583")
        tx_token = web3.eth.send_raw_transaction(signed_txn.rawTransaction)
        print("Sold {symbol}: " + web3.toHex(tx_token))
        time.sleep(5)
   